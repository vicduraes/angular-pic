import { TokenService } from "./token.service";

describe("TokenService", () => {
  let token: string;
  let service: TokenService;

  beforeEach(() => {
    service = new TokenService();
    token = "exemploDeToken";
  });

  it("must be instantiated", () => {
    expect(service).toBeTruthy();
  });

  it("must be set token in local storage", () => {
    service.setToken(token);
    expect(service.hasToken()).toBeTruthy();
    expect(service.getToken()).toEqual("exemploDeToken");
  });

  it("must be remove token in local storage", () => {
    service.setToken(token);
    service.removeToken();
    expect(service.hasToken()).toBeFalsy();
    expect(service.getToken()).toBeFalsy();
  });

  afterEach(() => {
    localStorage.clear();
  });
});
