import { Box, Button, Divider, Flex, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CapitalizeFirstTxt, ChangeCurrency, ContainerBtn, GeneralBtn, HeaderText1, SecondVContainer } from "../../utils";
import { API } from "../lib/api";

const Service = () => {
  const router = useRouter();
  const [service, setService] = useState();
  const [emp, setEmp] = useState(false);
  const [time, setTime] = useState(false);
  const [employee, setEmployee] = useState();
  const [selected, setSelected] = useState({
    time: "",
    day: "",
    email: '',
    phone: '',
    name: ''
  });
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    if (router?.query) {
      fetch(`${API()}service/{id}?id=${router.query.slug}`)
        .then((d) => d.json())
        .then((d) => setService(d));
    }
  }, [router.query]);
  const sendOrder = async () => {
    try {
        await axios.post(`${API()}order`, 
        {
            name: selected.name,
            email: selected.email,
            phone: selected.phone,
            userId: employee._id,
            serviceId: service._id,
            time: selected.time,
            date: selected.day,
        
    }).then((d) => console.log(d))
    } catch(e) {
        console.log(e)
    }

  }
  return service && (
    <SecondVContainer bg="white" jc="start" >
      <HStack justifyContent={'space-between'} w='full'>
        <HeaderText1 txt={CapitalizeFirstTxt(service?.name)} fs='1.2rem'/>
        <HeaderText1 txt={CapitalizeFirstTxt(ChangeCurrency(service?.price)+service?.currency)} fs='1.2rem'/>
        </HStack>
        <Divider bg={'black'}/>
      <HStack justifyContent={'space-between'} w='full'>
        <HeaderText1 txt={'Үргэлжлэх хугацаа:'} fs='1.2rem'/>
        <HeaderText1 txt={CapitalizeFirstTxt(service?.duration)} fs='1.2rem'/>
        </HStack>
        <Divider bg={'black'}/>
      <HStack justifyContent={'space-between'} w='full'>
        <HeaderText1 txt={'Урьдчилгаа төлбөр:'} fs='1.2rem'/>
        <HeaderText1 txt={CapitalizeFirstTxt(ChangeCurrency(service?.pre)+service?.currency)} fs='1.2rem'/>
        </HStack>
        <Divider bg={'black'}/>
      <GeneralBtn func={onOpen} txt={'Цаг сонгох'}/>
      <Modal isOpen={isOpen} onClose={onClose} size='sm' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{employee ? "Цаг сонгох" : "Гоо сайханч сонгох"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {service?.employees?.map((e, i) => {
          return (
            <ContainerBtn
              key={i}
              func={() => {
                setEmployee(e);
                setTime(true);
              }}
            >
              <HStack justifyContent={'space-between'} w='full'>
              <HeaderText1 txt={'Гоо сайханч'} fs='1.2rem'/>
              <HeaderText1 txt={CapitalizeFirstTxt(e.name)} fs='1.2rem'/>
              </HStack>
            </ContainerBtn>
          );
        })}
        <Box h={4}/>
        {time &&
        employee?.schedule?.map((s, i) => {
          return (
            <>
              <Flex>
              <Button
                key={i}
                onClick={() => setSelected((d) => ({ ...d, day: s.day }))}
              >
                {s.day}
              </Button>
              </Flex>
              <Box h={4}/>
              <Flex gap={2}>
              {(i == 0 || selected.day == s.day) &&
                s.times?.map((t) => {
                  return (
                    <Button
                      onClick={() =>
                        setSelected((selected) => ({ ...selected, time: t, day: s.day }))
                      }
                    >
                      {t}
                    </Button>
                  );
                })}
              </Flex>
            </>
          );
        })}
        <Box h={4}/>
        {selected?.time && selected?.day && employee && (
          <>
        <Input onChange={(e) => setSelected((selected) => ({...selected, name: e.target.value}))}/>
        <Input onChange={(e) => setSelected((selected) => ({...selected, email: e.target.value}))}/>
        <Input onChange={(e) => setSelected((selected) => ({...selected, phone: e.target.value}))}/>
          <Box h={4}/>
        <GeneralBtn func={() => sendOrder()} txt={'Захиалга өгөх'}/>
        </>
      )}
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
              Хаах
            </Button>
           <Button variant='ghost'>Secondary Action</Button>  */}
          </ModalFooter> 
        </ModalContent>
      </Modal>
      
      
    </SecondVContainer>
  );
};

export default Service;
