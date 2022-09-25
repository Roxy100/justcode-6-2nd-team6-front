import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../../components/purchase/PaymentModal';

const StyledVoucher = styled.div`
  .voucher-wrap {
    padding: 40px;
    .voucher-cardlist {
      list-style: none;
      li {
        list-style: none;
        .voucher-carditem {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          min-height: 200px;
          margin-bottom: 20px;
          padding: 50px 60px;
          background-color: #f4f5f8;
          border-radius: 8px;
          .card-left {
            width: 310px;
            margin-right: 14px;
            padding-bottom: 40px;
            .name {
              margin-top: 4px;
              font-size: 20px;
              line-height: 1.2;
              color: black;
              font-weight: 600;
            }
            .desc {
              margin-top: 5px;
              font-size: 13px;
              line-height: 20px;
              color: #555;
            }
          }
          .card-right {
            flex: 1;
            padding-left: 49px;
            align-self: center;
            .voucher-list-sub {
              list-style: none;
              li {
                margin: 30px 0;
                .item {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 0;
                  .item-left {
                    flex: 0 1 auto;
                    text-align: left;
                    .subject {
                      font-size: 16px;
                      color: #181818;
                    }
                  }
                  .item-right {
                    flex: 1 0 auto;
                    text-align: right;
                    margin-left: 10px;
                    .price-box {
                      display: inline-block;
                      line-height: 1.2;
                      .first-cost {
                        margin-right: 10px;
                        font-size: 12px;
                        color: #bdbdbd;
                        vertical-align: middle;
                        text-decoration: line-through;
                      }
                      .price {
                        font-size: 20px;
                        color: #3f3fff;
                        vertical-align: middle;
                      }
                      .color-red {
                        color: #e61313 !important;
                      }
                    }
                    .btn-buy {
                      margin-left: 20px;
                      padding: 5px 17px;
                      text-align: center;
                      font-size: 14px;
                      color: #fff;
                      background-color: #3f3fff;
                      border: none;
                      border-radius: 22px;
                      box-sizing: border-box;
                      &:hover {
                        cursor: pointer;
                      }
                    }
                  }
                }
              }
            }
          }
          .btn-detail {
            position: absolute;
            bottom: 57px;
            left: 57px;
            font-size: 13px;
            color: #929292;
            background-color: transparent;
            border: none;
            .next-arrow-img {
              position: absolute;
              bottom: 2px;
              width: 15px;
              height: 15px;
              vertical-align: middle;
              color: #929292;
              opacity: 0.5;
            }
            &:hover {
              cursor: pointer;
            }
          }
        }
        /* Banner 부분 */
        .voucher-banner {
          padding: 0;
          background-color: rgb(150, 105, 232);
          .voucher-banner-img {
            width: 100%;
            height: 100%;
          }
          .voucher-banner-item {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0 165px;
            margin-top: 5px;
            box-sizing: border-box;
            .card-left {
              flex: 0 1 auto;
              width: auto;
              margin: 0;
              padding: 0;
              .name {
                color: #fff;
                font-size: 18px;
              }
            }
            .card-right {
              flex: 0 0 auto;
              margin-left: 19px;
              padding-left: 0;
              border: 0;
              .voucher-list-sub {
                list-style: none;
                li {
                  .item {
                    text-align: center;
                    .item-right {
                      flex: 0 1 auto;
                      text-align: right;
                      .btn-buy {
                        margin: 0 10px;
                        text-align: center;
                        padding: 5px 17px;
                        font-size: 14px;
                        color: #fff;
                        background-color: #3f3fff;
                        border: none;
                        border-radius: 22px;
                        &:hover {
                          cursor: pointer;
                        }
                      }
                      .price-box > .first-cost {
                        font-size: 12px;
                        margin: 0 5px;
                        color: hsla(0, 0%, 100%, 0.7);
                        text-decoration: line-through;
                      }
                      .price-box > .price {
                        font-size: 20px;
                        color: white;
                      }
                    }
                  }
                }
              }
            }
            .btn-detail {
              position: absolute;
              bottom: auto;
              right: 40px;
              left: auto;
              font-size: 12px;
              background-color: transparent;
              color: white;
              border: none;
              .next-arrow-img {
                position: absolute;
                top: 2px;
                width: 15px;
                height: 15px;
                vertical-align: middle;
                color: white;
              }
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .pass-notice {
      padding-top: 30px;
      text-align: left;
      width: 955px;
      .notice-title {
        height: 25px;
        color: #222;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;

const Voucher = () => {
  const [voucher, setVoucher] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    fetch('/data/voucherdata.json')
      .then((res) => res.json())
      .then((res) => {
        setVoucher(res.data);
      });
  }, []);

  return (
    <StyledVoucher>
      <div className='voucher-wrap'>
        <ul className='voucher-cardlist'>
          <li>
            <div className='voucher-carditem voucher-banner'>
              <img
                alt='베너홍보'
                src='/Images/banner.png'
                className='voucher-banner-img'
              />
              <div className='voucher-banner-item'>
                <div className='card-left'>
                  <h3 className='name'>(첫 구매) 무제한 듣기 정기결제</h3>
                </div>
                <div className='card-right'>
                  <ul className='voucher-list-sub'>
                    <li>
                      <div className='item'>
                        <div className='item-right'>
                          <span className='price-box'>
                            <del className='first-cost'>정가 8,000원</del>
                            <span className='price'>
                              <em>100</em>원
                            </span>
                          </span>
                          <button type='button' className='btn-buy'>
                            구매
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <button type='button' className='btn-detail'>
                  이용권 자세히보기
                  <img
                    alt='화살표'
                    src='/Images/next.png'
                    className='next-arrow-img'
                  />
                </button>
              </div>
            </div>
          </li>
          {voucher &&
            voucher.map((voucherCard, index) => {
              return (
                <li key={voucher.voucherId}>
                  <div className='voucher-carditem'>
                    <div className='card-left'>
                      <h3 className='name'>{voucher[index].voucherName}</h3>
                      <p className='desc'>{voucher[index].description}</p>
                    </div>
                    <div className='card-right'>
                      <ul className='voucher-list-sub'>
                        <li>
                          <div className='item'>
                            <div className='item-left'>
                              <span className='subject'>정기결제</span>
                            </div>
                            <div className='item-right'>
                              <span className='price-box'>
                                <del className='first-cost'>
                                  정가{voucher[index].origin_price}원
                                </del>
                                {voucher[index].sale_price === null ? null : (
                                  <span className='price'>
                                    <em>{voucher[index].sale_price}</em>원
                                  </span>
                                )}
                              </span>
                              <button
                                type='button'
                                className='btn-buy'
                                onClick={openModal}
                              >
                                구매
                              </button>
                              <Modal
                                open={modalOpen}
                                close={closeModal}
                              ></Modal>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <div className='item-left'>
                              {voucher[index].membership[0].membershipName ===
                              null ? null : (
                                <span className='subject'>
                                  {voucher[index].membership[0].membershipName}
                                </span>
                              )}
                            </div>
                            <div className='item-right'>
                              <span className='price-box'>
                                {voucher[index].membership[0].origin_price ===
                                null ? null : (
                                  <del className='first-cost'>
                                    정가
                                    {voucher[index].membership[0].origin_price}
                                    원
                                  </del>
                                )}
                                {voucher[index].membership[0].benefit_price ===
                                null ? null : (
                                  <span className='price color-red'>
                                    <em>
                                      {
                                        voucher[index].membership[0]
                                          .benefit_price
                                      }
                                    </em>
                                    원
                                  </span>
                                )}
                              </span>
                              <button type='button' className='btn-buy'>
                                구매
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className='item'>
                            <div className='item-left'>
                              <span className='subject'>1개월 권</span>
                            </div>
                            <div className='item-right'>
                              <span className='price-box'>
                                <span className='price'>
                                  <em>{voucher[index].origin_price}</em>원
                                </span>
                              </span>
                              <button type='button' className='btn-buy'>
                                구매
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button type='button' className='btn-detail'>
                      이용권 자세히 보기
                      <img
                        alt='화살표'
                        src='/Images/next.png'
                        className='next-arrow-img'
                      />
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
        <div className='pass-notice'>
          <h3 className='notice-title'>이용권 유의사항</h3>
        </div>
      </div>
    </StyledVoucher>
  );
};

export default Voucher;
