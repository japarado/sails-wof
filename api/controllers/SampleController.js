/**
 * SampleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  userProfile: async (req, res) => {
    const userId = req.param('id');
    const user = await User.findOne({ id: userId }).populate('profile');

    const context =
      {
        user: user,
      };
    res.status(200).send(context);
  }
};

