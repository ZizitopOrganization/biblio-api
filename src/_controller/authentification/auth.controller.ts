import { Controller, Post, HttpCode, HttpStatus, Body, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from 'src/_helper/decorator/user.decorator';
import { User } from '../_database/_entity/user/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    @UseGuards(LocalAuthGuard)
    singIn(@Body() { login, password }: { login: string, password: string }) {
        return this.authService.signIn(login, password)
    }

    @Post('sign-up')
    singUp(@Body() data: SignUpData) {
        return this.authService.signUp(data)
    }

    @Post('forgot-password')
    forgotPassword(@Body() { email }: { email: string }) {
        return this.authService.forgotPassword(email)
    }

    @Post('reset-password')
    @UseGuards(JwtAuthGuard)
    resetPassword(
        @CurrentUser() { user }: { user: User },
        @Body() { password, confirm }: { password: string, confirm: string }
    ) {
        return this.authService.resetPassword(user, password, confirm)
    }
}
