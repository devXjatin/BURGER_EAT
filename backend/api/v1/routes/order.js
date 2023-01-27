import passport from "passport";
import { isAuthenticated } from "../middlewares/auth.js";
import { orderCreated } from "../controllers/order.js";
const router = express.Router();


//order created
router.post("/create-order", isAuthenticated, orderCreated)


export default router