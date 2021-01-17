import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export async function set(key: string, value: any): Promise<void> {
    await Storage.set({
        key: key,
        value: JSON.stringify(value)
    });
}

export async function get(key: string): Promise<any> {
    const { value } = await Storage.get({ key: key });
    //console.log('Got item: ', value);
    if (value == null) {
        return null;
    }
    return JSON.parse(String(value));
}

export async function remove(key: string): Promise<void> {
    await Storage.remove({
        key: key
    });
}
