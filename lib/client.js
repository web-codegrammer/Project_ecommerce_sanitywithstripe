import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({  //setup sanity client
    projectId: '4br0k5ys',  // Properties for Sanity client
    dataset: 'production',    // development or production
    apiVersion: '2022-05-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);