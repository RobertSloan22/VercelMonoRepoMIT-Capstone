import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import '../styles/profile.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useDepositMutation, useWithdrawMutation, useGetUserProfileQuery } from '../app/services/auth/authService';

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [balance, setBalance] = useState();
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [deposit, { isLoading: isDepositing, isError: depositError }] = useDepositMutation();
  const [withdraw, { isLoading: isWithdrawing, isError: withdrawError }] = useWithdrawMutation();
  const { data: userProfile, isLoading: isFetchingProfile, isError: profileError } = useGetUserProfileQuery();

  useEffect(() => {
    if (userProfile) {
      showBalance(userProfile.balance);
    }
  }, [userProfile]);

  const handleDeposit = (e) => {
    e.preventDefault();
    deposit(depositAmount).then((result) => {
      setBalance(result.data.balance);
      setDepositAmount(0);
    });
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    withdraw(withdrawAmount).then((result) => {
      setBalance(result.data.balance);
      setWithdrawAmount(0);
    });
  };
 
  return (
    <>
      <div>
        <Card>
          <Card.Header>
            <Nav variant='pills' defaultActiveKey='#first'>
              <Nav.Item>
                <Nav.Link href='#first'>Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#link'>Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#disabled' disabled>
                  Welcome <strong>{userInfo?.firstName}!</strong>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Welcome <strong>{userInfo?.firstName}!</strong> You can view this page because you're logged in
            </Card.Text>
            <form onSubmit={handleDeposit}>
              <div className='row'>
                <div className='col'>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Deposit Funds'
                    aria-label='First name'
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(parseFloat(e.target.value))}
                  />
                </div>
                <Button className='btn btn-primary' type='submit' disabled={isDepositing}>
                  Deposit
                </Button>
              </div>
            </form>
            {depositError && <div>{depositError.message}</div>}
            <form onSubmit={handleWithdraw}>
              <div className='row'>
                <div className='col'>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Withdraw Funds'
                    aria-label='Last name'
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(parseFloat(e.target.value))}
                  />
                </div>
                <Button className='btn btn-primary' type='submit' disabled={isWithdrawing}>
                  Withdraw
                </Button>
              </div>
            </form>
            {withdrawError && <div>{withdrawError.message}</div>}
            <p>Balance: {balance}</p>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ProfileScreen;