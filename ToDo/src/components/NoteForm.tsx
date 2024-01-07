import React, { FormEvent, useRef } from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import CreatableReactSelect from 'react-select/creatable'

function NoteForm(onSubmit) {
    const titleref = useRef<HTMLInputElement>(null)
    const markdownref= useRef<HTMLTextAreaElement>(null)
    function handleSubmit(e:FormEvent) {
        
    }
  return (
    <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
            <Row>
                <Col>
                <Form.Group controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref={titleref} required placeholder="Enter title" />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId='tags'>
                    <Form.Label>Tags</Form.Label>
                    <CreatableReactSelect isMulti/>
                </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId='markdown'>
                    <Form.Label>Body</Form.Label>
                    <Form.Control ref={markdownref} required as="textarea" rows={15} />
                </Form.Group>
                <Stack direction='horizontal' gap={2} className='justify-content-end'>
                    <Button type='submit' variant='primary'>Save</Button>
                    <link to="..">
                    <Button type='button' variant='secondary'>Cancel</Button>
                    </link>

                </Stack>
        </Stack>
    </Form>
  )
}

export default NoteForm