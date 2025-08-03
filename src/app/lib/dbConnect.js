import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionDbNameObj = {
  servicesCollectionName: "services",
};

const dbConnect = (collectionName) => {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(collectionName);
};
export default dbConnect;