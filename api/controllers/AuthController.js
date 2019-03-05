/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  user: (req, res) =>
  {
    console.log("WOW")
    let userId = req.session.userId;
    let context = {
      userId: userId
    };
    //return res.status(200).body(context);
    res.send(200, context);
  }
};

