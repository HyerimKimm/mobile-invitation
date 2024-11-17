export default function generateError (message:string, statusCode: number): never {
    throw { message, statusCode }
}