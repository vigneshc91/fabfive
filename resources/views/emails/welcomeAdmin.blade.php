@extends('layout.email')
@section('content')
<table cellpadding="0" cellspacing="0" border="0"  width="100%">
    <tr>
        <td style="padding:10px 15px; background-color:#fff; font-size:14px; ">
            <p>Hi {{ $first_name . ' '. $last_name }}</p>
            <p>Welcome to FabFive</p>
            <p>Click <a href="{{ $verificationToken }}" style="font-weight:bold; color:#7F2714; ">here</a> to activate your account.</p>
            <p>Use <strong>{{ $password }}</strong> as your temporary password to login to your account after verifying, kindly change this temporary password after login.</p>
        </td>
    </tr>
</table>
@stop