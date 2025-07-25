import React from 'react'
import axios from "axios";

const API = "https://api.aimostore.shop";
// const API = "http://127.0.0.1:8000";

const API_BASEURL = `${API}/api`;

const axiosInstance = axios.create({
    baseURL: API_BASEURL,
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // localStorage.removeItem('token');
      // window.location.reload();
      console.warn("🔒 Unauthorized request detected (401).");
    }
    return Promise.reject(error);
  }
);

const API_ENDPOINTS = {

  //guest
  getGuest: `${API_BASEURL}/guest`,

  // image
  getImages: `${API_BASEURL}/image`,

  // information
  getInformation: `${API_BASEURL}/information`,

  // achievement
  getAchievement: `${API_BASEURL}/achievement`,

  // social
  getSocial: `${API_BASEURL}/social`,

  // resume
  getResume: `${API_BASEURL}/resume`,

  // skill
  getSkill: `${API_BASEURL}/skill`,

  // text
  getText: `${API_BASEURL}/text`,

  // portfolio
  getPortfolio: `${API_BASEURL}/portfolio`,

  // blog
  getBlog: `${API_BASEURL}/blog`,

  // email
  createEmail: `${API_BASEURL}/email`,

  // login
    LoginUser: `${API_BASEURL}/login`,

};

export {axiosInstance, API_BASEURL, API_ENDPOINTS, API};