export class UserInfo {
  public loggedIn = false;
  constructor(public userName: string, public subreddit: string[], public userId: number) {}
}
