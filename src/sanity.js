import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'jhbcd917',
    dataset: 'production',
    useCdn: false
})