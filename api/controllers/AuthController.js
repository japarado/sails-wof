/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  user: (req, res) =>
  {
    let userId = req.session.userId ? req.sessionsessions.userId : false;
    let context = {
      userId: userId
    };
    //return res.status(200).body(context);
    res.status(200).send(context);
  }
};

