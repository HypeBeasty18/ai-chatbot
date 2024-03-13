class Settings:
    DB_HOST: str = 'localhost'
    DB_PORT: int = 5432
    DB_USER: str = 'admin'
    DB_PASS: str = 'test'
    DB_NAME: str = 'test'

    @property
    def db_url_asyncpg(self):
        # postgresql+asyncpg://postgres:postgres@localhost:5432/sa
        return f"postgresql+asyncpg://{self.DB_USER}:{self.DB_PASS}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"


settings = Settings()
