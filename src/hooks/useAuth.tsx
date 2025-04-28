export interface User {
    name: string;
    avatarUrl: string;
  }
  export const useAuth = (): { user: User } => {
    return {
      user: {
        name: '示範帳號',
        avatarUrl: 'https://i.pravatar.cc/100?u=demouser'
      }
    };
  };
  