import { Body, Controller, Get, Param, Patch, Post, Put, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() {email, name, password}: CreateUserDTO) {
    return this.userService.create({email, name, password});
  }

  @Get()
  async listUsers() {
    return {users:[]}
  }

  @Get()
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return {user:{}, id}
  }

  @Put(':id')
  async updateUser(@Body() body: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'put',
      body,
      id
    }
  }

  @Patch(':id')
  async updatePartialUser(@Body() body: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'patch',
      body,
      id
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) { 
    return {
      id
    }
  }
}