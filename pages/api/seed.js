import nextConnect from "next-connect";
import Product from "../../models/Product";
<<<<<<< HEAD
import User from "../../models/User";
import db from "../../utils/db";
=======
import User from '../../models/User';
import db from '../../utils/db'
>>>>>>> a8d9ba8b585b1f17f2e1079516a9187cabd34311
import data from "../../utils/data";

const handler = nextConnect();

<<<<<<< HEAD
handler.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
=======
handler.get(async(req, res)=>{
    await db.connect();
    await Product.deleteMany();
    await Product.insertMany(data.products);
    await User.deleteMany();
    await User.insertMany(data.users);
    await db.disconnect();
    res.send({message: 'seeded successfully'});

>>>>>>> a8d9ba8b585b1f17f2e1079516a9187cabd34311
});

export default handler;
