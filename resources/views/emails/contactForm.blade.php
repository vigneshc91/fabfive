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
                                    <img  src="{{ $message->embed(public_path() . '/images/favicon.ico') }}"/>
                                </td>
                            </tr>
                        </table>
                        <!-- Logo End-->
                        <table cellpadding="0" cellspacing="0" border="0"  width="100%">
                            <tr>
                                <td align="center" style="padding:10px 0; background-color:#274e18;">
                                    <h2 style="text-algin: center; color:#fff; font-size:20px;">You have a query from {{ $name }}</h2>
                                </td>
                            </tr>
                        </table>
                        <!-- header End-->

                        <table cellpadding="0" cellspacing="0" border="0"  width="100%">
                            <tr>
                                <td style="padding:10px 15px; background-color:#fff; font-size:14px; ">
                                    <p>From: {{ $name }}</p>
                                    <p>E-Mail: {{ $email }}</p>
                                    <p>Message: {{ $query }}</p>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" border="0"  width="100%">
                            <tr>
                                <td style="padding:10px 15px; background-color:#fff; font-size:12px; ">
                                    Regards,
                                    <br/>
                                    FabFive Team
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