import { CONSTANTS } from "../interfaces/constants";

export const IconHelper = {
    getFileIcon: (fileType: string) => (CONSTANTS.ICONS[fileType] || '')
}