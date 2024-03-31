import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { MdDateRange, MdAccessTime, MdOutlineMessage} from 'react-icons/md'
import { AiFillCaretDown } from 'react-icons/ai';
import {  HiOutlinePhone } from 'react-icons/hi';

const Reservation = () => {
  return (
    <form action="" className="form-left">
      <h2 className="headline-1 text-center">Online Reservation</h2>
      <p className="form-text text-center">
        Booking request <a href="tel:+88123123456" className="link">+88-123-123456</a> or fill out the order form
      </p>
      <div className="input-wrapper">
        <div className="icon-wrapper">
          <AiOutlineUser size="1.25em" className="icon" />
          <input type="text" name="name" placeholder="Your Name" autoComplete="off" className="input-field" />
        </div>
        <div className="icon-wrapper">
          < HiOutlinePhone size="1.25em" className="icon" />
          <input type="tel" name="phone" placeholder="Phone Number" autoComplete="off" className="input-field" />
        </div>
      </div>
      <div className="input-wrapper">
        <div className="icon-wrapper">
          <MdDateRange size="1.25em" className="icon" />
          <select name="person" className="input-field">
            <option value="1-person">1 Person</option>
            <option value="2-person">2 Person</option>
            <option value="3-person">3 Person</option>
            <option value="4-person">4 Person</option>
            <option value="5-person">5 Person</option>
            <option value="6-person">6 Person</option>
            <option value="7-person">7 Person</option>
          </select>
          <AiFillCaretDown size="1.25em" className="icon" />
        </div>
        <div className="icon-wrapper">
          <MdDateRange size="1.25em" className="icon" />
          <input type="date" name="reservation-date" className="input-field" />
          <AiFillCaretDown size="1.25em" className="icon" />
        </div>
        <div className="icon-wrapper">
          <MdAccessTime size="1.25em" className="icon" />
          <select name="time" className="input-field">
            <option value="08:00am">08 : 00 am</option>
            <option value="09:00am">09 : 00 am</option>
            <option value="10:00am">10 : 00 am</option>
            <option value="11:00am">11 : 00 am</option>
            <option value="12:00pm">12 : 00 pm</option>
            <option value="01:00pm">01 : 00 pm</option>
            <option value="02:00pm">02 : 00 pm</option>
            <option value="03:00pm">03 : 00 pm</option>
            <option value="04:00pm">04 : 00 pm</option>
            <option value="05:00pm">05 : 00 pm</option>
            <option value="06:00pm">06 : 00 pm</option>
            <option value="07:00pm">07 : 00 pm</option>
            <option value="08:00pm">08 : 00 pm</option>
            <option value="09:00pm">09 : 00 pm</option>
            <option value="10:00pm">10 : 00 pm</option>
          </select>
          <AiFillCaretDown size="1.25em" className="icon" />
        </div>
      </div>
      <div className="input-wrapper">
        <div className="icon-wrapper">
          <MdOutlineMessage size="1.25em" className="icon" />
          <textarea name="message" placeholder="Message" autoComplete="off" className="input-field"></textarea>
          <AiFillCaretDown size="1.25em" className="icon" />
        </div>
      </div>
      <button type="submit" className="btn btn-secondary">
        <span className="text text-1">Book A Table</span>
        <span className="text text-2" aria-hidden="true">Book A Table</span>
      </button>
    </form>
  )
}

export default Reservation;