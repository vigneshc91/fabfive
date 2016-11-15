<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
  </head>
<body>
<table cellpadding="0" cellspacing="0" border="0" width="580" align="center" style=" font-family:Arial, Helvetica, sans-serif; font-weight:normal;">
    <tr>
        <td>
            <table cellpadding="0" cellspacing="0" border="0"  width="100%" style=" border:1px solid #ccc;">
                <tr>
                    <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0"  width="100%">
                            <tr>
                                <td align="center" style="padding:10px 0;">
                                    <img  src="{{ $message->embed(public_path() . '/img/favicon.ico') }}"/>
                                </td>
                            </tr>
                        </table>
                        <!-- Logo End-->
                        <table cellpadding="0" cellspacing="0" border="0"  width="100%">
                            <tr>
                                <td style="padding:10px 15px; background-color:#fff; font-size:12px; ">
                                    Regards,
                                    <br/>
                                    FabFive Team
                                </td>
                            </tr>
                        </table>
                        <!-- header End-->

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

                        <!-- footer start-->
                        <table cellpadding="0" cellspacing="0" border="0"  width="100%">
                            <tr>
                                <td align="center" style="padding:5px 15px; background-color:#ccc; font-size:14px; color:#333;">
                                    <p>All rights reserved. &copy; FabFive {{ date('Y') }}</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>