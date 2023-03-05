import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"



export const client = createClient({
    projectId: '2j6tkrkp',
    dataset: 'production',
    apiVersion: '2023-03-05',
    useCdn: true,
    token: 'skhRW1fXR9m99c1u4mFVmcoZ2tL4egHgUBepNeDBsLu2gT3IvvfrZ6A3DmcJMvHY3KOg1a7RGppNIwcWZB5nXmb6iiD8IG95Nb17ggLAYGa8RrFRT55bbjP69HCFubijJxGHsaceVnrVHSjEf2MKZP4mf2XsbibBMu4VygAbObhWlkQ1PYPm'
})


const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}
