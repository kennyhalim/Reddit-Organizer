export class UserInfo {
  public loggedIn: boolean = false;
  constructor(public userName: string, public subreddit: string[], public userId: number) {}
}
