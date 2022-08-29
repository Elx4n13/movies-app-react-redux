import React from 'react'
import {NavLink} from 'react-router-dom'
const Links = () => {
  return (
    <>
        <NavLink
                to="/latest?page=1"
                style={({ isActive }) => ({
                  color: isActive ? "green" : null,
                })}
              >
                Latest
              </NavLink>
              <NavLink
                to="/now_playing?page=1"
                style={({ isActive }) => ({
                  color: isActive ? "green" : null,
                })}
              >
                Now Playing
              </NavLink>
              <NavLink
                to="/popular?page=1"
                style={({ isActive }) => ({
                  color: isActive ? "green" : null,
                })}
              >
                Popular
              </NavLink>
              <NavLink
                to="/top_rated?page=1"
                style={({ isActive }) => ({
                  color: isActive ? "green" : null,
                })}
              >
                Top Rated
              </NavLink>
              <NavLink
                to="/upcoming?page=1"
                style={({ isActive }) => ({
                  color: isActive ? "green" : null,
                })}
              >
                Upcoming
              </NavLink>
    </>
  )
}

export default Links