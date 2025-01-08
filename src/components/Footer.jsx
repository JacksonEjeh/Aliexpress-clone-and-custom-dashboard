import React from 'react'
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className='z-40'>
      <div className='bg-zinc-200'>
        <div className='w-[75%] mx-auto py-8'>
          <div className='flex justify-between mb-10'>
            <div>
              <h1 className='font-bold text-[16px] mb-3'>Customer service</h1>
              <div className='text-gray-600'>
                <p>Help Center</p>
                <p>Transaction Services</p>
                <p>Agreement for non-</p>
                <p>EU/UK Consumers</p>
                <p>Terms and Conditions for</p>
                <p>EU/EEA/UK Consumers</p>
                <p>(Transactions)</p>
                <p>Take our feedback survey</p>
              </div>
            </div>
            <div>
              <h1 className='font-bold text-[16px] mb-3'>Shopping with us</h1>
              <div className='text-gray-600'>
                <p>Making payments</p>
                <p>Delivery options</p>
                <p>Buyer Protection</p>
              </div>
            </div>
            <div>
              <h1 className='font-bold text-[16px] mb-3'>Collaborate with us</h1>
              <div className='text-gray-600'>
                <p>Partnerships</p>
                <p>Affiliate program</p>
                <p>DS Center</p>
                <p>Seller Log In</p>
                <p>中国卖家入驻</p>
                <p>Non-Chinese Seller</p>
                <p>Registration</p>
              </div>
            </div>
            <div>
              <h1 className='font-bold text-[16px] mb-3'>Pay with</h1>
              <div className='grid grid-cols-6 gap-2'>
                <img className='w-12 rounded' src="https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png" alt="visa" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" alt="" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" alt="" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" alt="" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png" alt="" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/S173da9e53a234dcb9795cebd1856c4d7J/216x144.png" alt="" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/Sa4a89534ef694f1c8877ae3d864db6acz/216x144.png" alt="" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/S85aba413145f4b479fc18825603f87aaZ/216x144.png" alt="" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/S0321450614244c4dafba2517560de3b8s/216x144.png" alt="" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/Sffbd9fb9807e42d9a32feda7bc09121cA/216x144.png" alt="" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/S7774cbfd89914cad85c8b548087820308/216x144.png" alt="" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/Sf9caac85ebcd470a95d0ff441ebf609fc/216x144.png" alt="" />
                <img className='w-12 rounded-lg' src="https://ae01.alicdn.com/kf/S2a5881f5906b4fb58a0c6da600ddf7bf1/216x144.png" alt="" />
              </div>
            </div>
            <div>
              <h1 className='font-bold text-[16px] mb-3'>Stay connected</h1>
              <div className='grid grid-cols-4 gap-3'>
                <RiFacebookBoxFill className='text-[27px]'/>
                <FaTwitter className='text-[27px]' />
                <FaInstagram className='text-[27px]' />
                <FaFacebookMessenger className='text-[27px]' />
                <RiWhatsappFill className='text-[27px]' />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-[79px] mb-10'>
            <div>
              <h1 className='font-bold text-[16px] mb-1'>Help</h1>
              <div className='text-gray-600'>
                <p>Help Center, Disputes & Reports, Buyer Protection, 
                  Report IPR infringement, Regulated Information, Integrity Compliance, 
                  Transparency Center, Submit report (non-registered users)
                </p>
              </div>
            </div>
            <div>
              <h1 className='font-bold text-[16px] mb-1'>AliExpress Multi-Language Sites</h1>
              <div className='text-gray-600'>
                <p>
                  Russian, Portuguese, Spanish, French, German, 
                  Italian, Dutch, Turkish, Japanese, Korean, Thai, Vietnamese, 
                  Arabic, Hebrew, Polish
                </p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-[79px]'>
            <div>
              <h1 className='font-bold text-[16px] mb-1'>Browse by Category</h1>
              <div className='text-gray-600'>
                <p>
                  All Popular, Product, Promotion, Low Price, Great Value, Reviews
                </p>
              </div>
            </div>
            <div>
              <h1 className='font-bold text-[16px] mb-1'>Alibaba Group</h1>
              <div className='text-gray-600'>
                <p>
                  RAlibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, 
                  Alibaba Cloud, Alibaba International, AliTelecom, DingTalk, 
                  Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black'>
        <div className='w-[75%] mx-auto py-2 text-sm text-white'>
          <p>
            Intellectual Property Protection - Privacy Policy - Sitemap - Terms of Use - 
            Information for EU consumers - Imprint - Transaction Services Agreement for non-EU/UK Consumers
            - Terms and Conditions for EU/EEA/UK Consumers - User Information Legal Enquiry Guide ©️2010-2024 
            AliExpress.com. All rights reserved. 增值电信业务经营许可证 增值电信业务经营许可证 浙B2-20120091-8 浙公网安备 浙公网安备 
            33010802002248号
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
