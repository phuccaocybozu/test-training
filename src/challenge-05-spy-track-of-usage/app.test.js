import Popup from "./Popup";
import { doUpdateProduct } from "./app";
import { updateProduct } from "./service";

jest.mock("./service");
describe("doUpdateProduct", () => {
  describe("when updating successfully", () => {
    it("should show a popup message", () => {
      // TODO: implement test
      updateProduct.mockResolvedValue();
      const toast = jest.spyOn(Popup, "toast");

      doUpdateProduct(1).then(() => {
        expect(toast).toHaveBeenCalledWith("The product is updated");
      });
    });
  });

  describe("when updating failed", () => {
    it("should show the error", () => {
      // TODO: implement test
      updateProduct.mockRejectedValue(new Error("Product not found"));
      const showError = jest.spyOn(Popup, "showError");

      doUpdateProduct(1).catch(
        () => expect(showError).toHaveBeenCalledWith("Product not found")
      )
    });
  });
});
