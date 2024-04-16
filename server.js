import * as FileSystem from 'expo-file-system';

const API_URL = "https://rapid-zebra-optionally.ngrok-free.app";

export const Models = {
    sd_xl_refiner: 'stabilityai/stable-diffusion-xl-refiner-1.0',
    sd_instruct: 'timbrooks/instruct-pix2pix',
    rmbg: 'briaai/RMBG-1.4'
}

export const uploadPhoto = async (photoUri, prompt, model) => {
    const queryParams = new URLSearchParams({
        prompt, model
    });

    const url = API_URL + "?" + queryParams;

    const options = {
        fieldName: 'file',
        httpMethod: 'POST',
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        headers: {
            'ngrok-skip-browser-warning': 'skip'
        }
    };

    const response = await FileSystem.uploadAsync(url, photoUri, options);

    if (response.status !== 200) {
        throw new Error(`Unexpected status code ${response.status} while downloading ${photoUri}`);
    }

    return JSON.parse(response.body).photo;
};

const tryToDownloadPhoto = async (photoFilename) => {
    const url = `${API_URL}/photos/${photoFilename}`;

    const options = {
        headers: {
            'ngrok-skip-browser-warning': 'skip'
        },
    };

    const photoUri = FileSystem.cacheDirectory + photoFilename;

    const result = await FileSystem.downloadAsync(url, photoUri, options);

    if (result.status === 200) {
        return photoUri;
    } else if (result.status === 404) {
        return null;
    }
    throw new Error(`Unexpected status code ${result.status} while downloading ${photoFilename}`);
};

export const downloadPhoto = async (photoFilename, interval, stopSignal) => {
    let result = await tryToDownloadPhoto(photoFilename);
    if (result !== null) {
        return result;
    } else if (!stopSignal.isSet) {
        return new Promise((resolve) => {
            const timerId = setTimeout(async () => {
                clearTimeout(timerId);
                const updatedResult = await downloadPhoto(photoFilename, interval, stopSignal);
                resolve(updatedResult);
            }, interval);
        });
    }
};
