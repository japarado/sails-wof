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
      required: false,
      description: 'URI to the user\'s avatar',
      maxLength: 255,
    },

    firstName: {
      type: 'string',
      required: false,
      description: 'The user\'s first name',
      maxLength: 255,
      example: 'John',
    },

    lastName: {
      type: 'string',
      required: false,
      description: 'The user\'s last name',
      maxLength: 255,
      example: 'Doe',
    },

    companyName: {
      type: 'string',
      required: false,
      description: 'The user\'s last current employer',
      maxLength: 255,
    },

    contactNumber: {
      type: 'string',
      required: false,
      description: 'The user\'s mobile number',
      maxLength: 255
    },

    companySite: {
      type: 'string',
      required: false,
      description: 'The user\'s set current company\'s website',
      maxLength: 255,
    },

    country: {
      type: 'string',
      required: false,
      description: 'The user\'s current country of residence',
      maxLength: 255,
    },

    addrOne: {
      type: 'string',
      required: false,
      description: 'User address, line one',
      maxLength: 255,
    },

    addrTwo: {
      type: 'string',
      required: false,
      description: 'User address, line two',
      maxLength: 255,
    },

    zipCode: {
      type: 'number',
      required: false,
      description: 'User zipcode',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    /*user: {
      model: 'user',
      unique: true,
    },*/
  },

};

