import { TokenService } from "./token.service";

describe("TokenService", () => {
  const service = new TokenService();
  const token = "exemploDeToken";

  it("must be instantiated", () => {
    expect(service).toBeTruthy();
  });

  it("must be set token in local storage", () => {
    service.setToken(token);
    expect(service.hasToken()).toBeTruthy();
    expect(service.getToken()).toEqual("exemploDeToken");
  });
});
