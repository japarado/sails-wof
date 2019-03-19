/**
 * Profile.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    picture: {
      type: 'string',
      maxLength: 255,
      required:false,
      description: 'URI for the user\'s avatar',
    },

    companyName: {
      type: 'string',
      maxLength: 255,
      required: false,
      description: 'User\'s company',
    },

    contactNumber: {
      type: 'string',
      maxLength: 255,
      required: false,
      description: 'User\'s mobile number',
    },

    companySite: {
      type: 'string',
      maxLength: 255,
      required: false,
      description: 'URL of the user\'s current employment firm',
    },

    country: {
      type: 'string',
      maxLength: 255,
      required: false,
      description: 'User\'s country of residence',
    },

    addrOne: {
      type: 'string',
      maxLength: 255,
      required: false,
      description: 'Address, line one',
    },

    addrTwo: {
      type: 'string',
      maxLength: 255,
      required: false,
      description: 'Address, line two',
    },

    zipCode: {
      type: 'number',
      required: false,
      description: 'User zip/postal code',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    user: {
      model: 'user',
      unique: true,
    },

  },

};

