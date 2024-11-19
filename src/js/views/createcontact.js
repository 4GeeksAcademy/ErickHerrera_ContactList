import React from "react";


export const Create = () => {
	return(
        <>
		<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Full Name:</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Full Name"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Email:</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Email"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Phone number:</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter phone number"/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Address</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter address"/>
</div>
<div class="col-12">
    <button type="submit" class="btn btn-primary">Save</button>
  </div>
	</>
)
};
