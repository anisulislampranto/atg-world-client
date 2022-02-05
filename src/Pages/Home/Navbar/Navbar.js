import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Login from '../../Login/Login/Login';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-light bg-light fixed-top'>
                <a className='navbar-brand mx-3' href="">ATG WORLD</a>
                <div style={{width:'350px'}} class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"> <FontAwesomeIcon icon={faSearch}/> </span>
                    <input style={{borderRadius:'20px', background:'#F2F2F2'}} type="text" class="form-control" placeholder="Search For Your Favorite groups in ATG" />
                </div>
                <a className='navbar text-decoration-none text-black mx-3' href="" data-toggle="modal" data-target="#exampleModalCenter">Create Account. <span style={{color:'blue'}}>Its Free!</span></a>
            </nav>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <button style={{marginTop:'-70px', marginLeft:'765px', background:'none', border:'none', color:'white'}} type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"> <FontAwesomeIcon icon={faTimesCircle}/> </span></button>
                        </div>
                        <div class="modal-body">
                            <Login/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;