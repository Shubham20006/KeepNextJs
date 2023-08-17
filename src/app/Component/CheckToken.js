"use client"
import React from 'react'

export function CheckToken() {
    const checkToken=localStorage.getItem('token')
  console.log(checkToken)

  
  return checkToken
}

// export function parseCookies(req) {
//     return parse(req.headers.cookie || '');
//   }

