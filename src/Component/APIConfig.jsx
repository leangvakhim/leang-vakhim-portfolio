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

const API_ENDPOINTS = {

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

const autoLoginAsGuest = async () => {
  try {
    if (!sessionStorage.getItem('guest_token')) {
      const res = await axios.post(API_ENDPOINTS.LoginUser, {
        name: 'guest',
        password: 'guest123',
      });
      sessionStorage.setItem('guest_token', res.data.access_token);
    }
  } catch (err) {
    console.error('Guest login failed:', err);
  }
};

axiosInstance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('guest_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export {axiosInstance, API_BASEURL, API_ENDPOINTS, API, autoLoginAsGuest};