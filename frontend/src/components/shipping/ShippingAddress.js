import React, { useEffect } from 'react'

const ShippingAddress = ({addr, key}) => {
  let listAddrs, listSelected = []
  // listAddrs = [].slice.call(document.querySelectorAll(".shipping-address__item"));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    listAddrs = [].slice.call(document.querySelectorAll(".shipping-address__item"));
  }, [listAddrs])
  
  const changeShadowColor = (e) => {
    e.preventDefault();
    let parentElm = e.target.parentElement;
    listSelected = listAddrs.filter(elm => elm.classList.contains("shipping-address__item_selected"));
    listSelected.forEach((elm) => elm.classList.remove("shipping-address__item_selected"))
    parentElm.classList.toggle("shipping-address__item_selected");
    parentElm.dataset.status = parentElm.dataset.status === "false" ? true : false;
  }

  return (
    <>
    <div className="shipping-address__item" onClick={changeShadowColor} data-status={ false } >
      <strong className="title__item">Dirección No. { key }</strong>
      <span>{addr.address}, {addr.country}, {addr.depto}, {addr.town}</span>
      <span className="od__item">{addr.otherDescription}</span>
    </div>
    </>
  )
}

export default ShippingAddress
