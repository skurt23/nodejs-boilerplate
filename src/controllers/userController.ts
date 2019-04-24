import {Context, GET, Path, POST, ServiceContext} from "typescript-rest";
import {Produces, Response, Tags} from "typescript-rest-swagger";
import {responseError, responseOk} from "../utils/responseUtils";
import {UserDao} from "../dao/userDao";
import {User} from "../models";
import {GENERAL_ERROR_CODE, GENERAL_ERROR_MSG} from "../utils/errorUtils";

@Path("/api/v1/user")
export class UserController {

    // In the ServiceContext object we have the Request and Response objects of Express
    // Example: this.context.request || this.context.response
    @Context
    public context: ServiceContext;

    /**
     * List all users
     */
    @Tags("User")
    @Produces("application/json")
    @Response<any>(200, "Users list or error", {
        status: "ok || error",
        data: "Response data with users if status==ok",
        code: "Error code if status==error",
        msg: "Error message if status==error"})
    @Path("/list")
    @GET
    public async getUsers() {
        try {
            const users = await UserDao.getUsers();
            return responseOk(users);
        } catch (e) {
            return responseError(GENERAL_ERROR_CODE, GENERAL_ERROR_MSG);
        }
    }

    /**
     * Create user object
     * @param user User JSON
     */
    @Tags("User")
    @Produces("application/json")
    @Response<any>(200, "User created or error", {
        status: "ok || error",
        data: "Response data with users if status==ok",
        code: "Error code if status==error",
        msg: "Error message if status==error"})
    @Path("/create")
    @POST
    public async createUser(userJson: User) {
        try {
            const user = await UserDao.saveUsers(userJson);
            return responseOk(user);
        } catch (e) {
            return responseError(GENERAL_ERROR_CODE, GENERAL_ERROR_MSG);
        }
    }
}
