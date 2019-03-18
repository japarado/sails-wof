/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  user: (req, res) => {
    if(req.me)
    {
      res.status(200).send(req.me);
    }
    else
    {
      res.status(200).send(false);
    }
  }
};

