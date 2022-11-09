import React from 'react';
import useTitle from '../../utilities/useTitle';

const AddService = () => {
    // Dynamic Title
    useTitle('Add Service || Dent Care');

    const handleAddService = e => {
        // prevent form refresh
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const img = form.photo_url.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;

        const service = {
            title,
            img,
            rating,
            price,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                form.reset();
                alert('Service Added successfully.')
            }
        })
        .catch(err => console.error(err));
    }

    return (
        <div className='container my-5'>
            <div className='bg-dark py-5 px-4 rounded'>
                <div className="px-0 px-md-5">
                    <h3 className='text-white'>Add a Service</h3>
                    <hr />
                    <form onSubmit={handleAddService}>
                        <div className='mb-3'>
                            <label htmlFor="title" className='mb-2'>Service Title</label>
                            <input className='form-control' type="text" name="title" placeholder='title' id="title" required />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="photo_url" className='mb-2'>Photo Url</label>
                            <input className='form-control' type="text" name="photo_url" placeholder='Photo Url' id="photo_url" required />
                        </div>
                        <div className='mb-3'>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="rating" className='mb-2'>Rating</label>
                                    <input className='form-control' type="number" name="rating" placeholder='Rating(1-5)' id="rating" required  max={5} min={1}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="price" className='mb-2'>Price</label>
                                    <input className='form-control' type="number" name="price" placeholder='Price' id="price" required min={0} />
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="description" className='mb-2'>Description</label>
                            <textarea className='form-control' type="text" name="description" placeholder='Description' id="description" required ></textarea>
                        </div>
                        <div>
                            <button className='primary_btn_custom' type='submit'>Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;