/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useReducer } from "react";
import { RequestApiProdcut, RequestApiCategory } from "../../scriptAll/requestAPI";
import "./ProductAll.css";
import { useParams } from "react-router-dom";
import _ from 'lodash';
import { getListItemCategory } from "..//showProductRouter/getItemAddCard"
import { wait } from "@testing-library/user-event/dist/utils";
import LoadListItem from "./loadListItem";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import icon2 from "./asset/img/2.gif";
const initialState = {
  state: false,
  dataProduct: [],
  dataCategory: []
};
//Đoạn này dùng reducer để lấy ra dữ liệu databasce
function reducer(initialStateSave, action) {
  switch (action.type) {
    case "REQUEST":
      return {
        ...initialStateSave,
        state: true
      }
    case "SUCSSET":
      return {
        dataProduct: action.dataProduct,
        dataCategory: action.dataCategory,
        state: false
      }
    default:
      break;
  }
  return initialStateSave;

}

function ProductAll() {


  const { invoiceId } = useParams();

  const [initialStateSave, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "REQUEST" })
    setTimeout(async () => {
      let dataProduct = await RequestApiProdcut();
      let dataCategory = await RequestApiCategory();
      //Đoạn này lấy dữ liệu category và product nhận từng sản phẩm khi check đúng nó sẽ lấy
      (dataProduct.length > 0 && dataCategory.length > 0) && dispatch({ type: "SUCSSET", dataProduct: dataProduct, dataCategory: dataCategory })
    }, 1)

  }, [])
  return (
    <>
      <section className="productAll">
        <div className="container1">
          <div className="prodcutAll__Box">

            {
              //Tiếp túc đoạn anyf ta truyền dữ liệu đó thông qua prop để truyền dữ liện qua tiếp đi vào file LoadListItem nhé
              initialStateSave.dataProduct.length > 0 ? (<><LoadListItem initialStateSave={initialStateSave} invoiceId={invoiceId} /></>) : (
                <>
                  <div className="prodcutAll__Box--listItemText">
                    <h1><img src={icon2} width={"45%"}></img></h1>
                  </div>
                 
                </>)
            }

          </div>
        </div>
      </section>
    </>
  );
}
export default ProductAll;
