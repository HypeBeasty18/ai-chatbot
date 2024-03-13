from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from server.app.db.database import Base, intpk, created_at


class Users(Base):
    __tablename__ = 'users'

    user_id: Mapped[intpk]
    name: Mapped[str]
    photo: Mapped[str]
    email: Mapped[str]
    password: Mapped[str]


class Messages(Base):
    __tablename__ = 'messages'

    user_id: Mapped[int] = mapped_column(ForeignKey('users.user_id'))
    chat_id: Mapped[intpk]
    text: Mapped[str]
    date: Mapped[created_at]
