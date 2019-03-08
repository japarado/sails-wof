/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'view-homepage-or-redirect': true,
  'deliver-contact-form-message': true,

  // START CUSTOM POLICIES

  // Allow CSRF retrieval whenever
  'security/grant-csrf-token': true,

  // For testin purposes only, must be deleted when finished
  ProfileController: {
    '*': true,
  },
  AuthController: {
    '*': true,
  },
  SampleController: {
    '*': true,
  }
};
