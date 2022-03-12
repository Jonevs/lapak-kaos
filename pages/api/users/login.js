<<<<<<< HEAD
import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../../models/User";
import db from "../../../utils/db";
import { signToken } from "../../../utils/auth";
=======
import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';
>>>>>>> a8d9ba8b585b1f17f2e1079516a9187cabd34311

const handler = nc();

handler.post(async (req, res) => {
<<<<<<< HEAD
  await db.connect();
  const user = await User.findOne({ email: req.body.email });
  await db.disconnect();
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).send({ message: "Invalid email or password" });
  }
});

export default handler;
=======
    await db.connect();
    const user = await User.findOne({ email: req.body.email });
    await db.disconnect();
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
        const token = signToken(user);
        res.send({
            token,
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(401).send({message: 'Invalid email or password'});
    }
});

export default handler;
>>>>>>> a8d9ba8b585b1f17f2e1079516a9187cabd34311
