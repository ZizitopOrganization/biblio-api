import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerModule } from './_helper/logger/logger.module'
import { HealthModule } from './_controller/health/health.module'
import { MediaModule } from './_controller/media/media.module'
import { InstallSchema } from './_database/install-schema'
import { UpgradeSchema } from './_database/upgrade-schema'
import { MailModule } from './_helper/mail/mail.module'
import { HttpModule } from '@nestjs/axios'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataBaseConfiguration } from './_config/database.configuration'
import { UserModule } from './_controller/_database/user/user.module'
import { AuthModule } from './_controller/authentification/auth.module'
import { BookModule } from './_controller/_database/book/book.module'
import { AuthorModule } from './_controller/_database/author/author.module'
import { typesOfBooksModule } from './_controller/_database/typesOfBooks/typesOfBooks.module'
import { StatusModule } from './_controller/_database/status/status.module'

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        HttpModule,
        LoggerModule,
        MailModule,
        ScheduleModule.forRoot(),
        HealthModule,
        MediaModule,
        TypeOrmModule.forRootAsync({
            useClass: DataBaseConfiguration
        }),
        UserModule,
        BookModule,
        AuthorModule,
        typesOfBooksModule,
        AuthModule,
        StatusModule
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
        InstallSchema,
        UpgradeSchema,
    ],
})
export class AppModule {
    constructor() {

    }
}
