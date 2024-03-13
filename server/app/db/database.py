import datetime
from sqlalchemy import text
from typing import Annotated
from sqlalchemy.orm import DeclarativeBase, mapped_column


intpk = Annotated[int, mapped_column(primary_key=True)]
created_at = Annotated[datetime.datetime, mapped_column(
        server_default=text("TIMEZONE('utc', now())"))]


class Base(DeclarativeBase):
    pass
