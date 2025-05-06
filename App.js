import { SQLiteProvider } from "expo-sqlite";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default function App() {
  return (
    <SQLiteProvider
      databaseName="userDatabase2.db"
      onInit={async (db) => {
        await db.execAsync(`
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            phone TEXT NOT NULL
          );
          PRAGMA journal_mode=WAL;
          `);
      }}
      options={{ useNewConnection: false }}
    >
      <UserForm />
      <UserList />
    </SQLiteProvider>
  );
}


