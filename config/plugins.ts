export default ({ env }) => ({
    email: {
        config: {
            provider: 'strapi-provider-email-sendinblue',
            providerOptions: {
                sendinblue_api_key: env('SIB_API_KEY'),
                sendinblue_default_replyto: env('SIB_DEFAULT_REPLY_TO'),
                sendinblue_default_from: env('SIB_DEFAULT_FROM'),
                sendinblue_default_from_name: env('SIB_DEFAULT_FROM_NAME')
            },
        },
    }
    // upload: {
    //   config: {
    //     provider: "strapi-provider-upload-do",
    //     providerOptions: {
    //       key: env('DO_SPACE_ACCESS_KEY'),
    //       secret: env('DO_SPACE_SECRET_KEY'),
    //       endpoint: env('DO_SPACE_ENDPOINT'),
    //       space: env('DO_SPACE_BUCKET')
    //     },
    //   },
    // }
})