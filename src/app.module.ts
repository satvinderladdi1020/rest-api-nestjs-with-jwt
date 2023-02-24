import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { MessagesModule } from './messages/messages.module';
import { NotificationsModule } from './notifications/notifications.module';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'feqwqrqweegqqrelgdlhg34hl12431@$BMkhkhkjbbMBdasdad', // <-- Set your secret key here
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'prabh',
      database: 'nestRestApi',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    PostsModule,
    MessagesModule,
    NotificationsModule,
    UsersModule,
    ChatsModule
  ],
  exports: [TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
