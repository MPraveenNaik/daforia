import styled from 'styled-components';
import { useState } from 'react';
import { theme } from '../theme';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${theme.colors.cream};
  border: 2px solid ${theme.colors.darkBrown};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${theme.colors.darkBrown};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${theme.colors.darkBrown};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${theme.colors.darkBrown};
  border-radius: 4px;
  font-size: 1rem;
  background: ${theme.colors.white};
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${theme.colors.darkBrown};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  background: ${theme.colors.white};
`;

const SubmitButton = styled.button`
  background: ${theme.colors.burntOrange};
  color: ${theme.colors.cream};
  border: none;
  padding: 12px 25px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
  
  &:hover {
    background: ${theme.colors.lightOrange};
  }
`;

const SampleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer>
      <FormTitle>Book Your Free Sample</FormTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="address">Shipping Address</Label>
          <TextArea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <SubmitButton type="submit">Submit Request</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default SampleForm;